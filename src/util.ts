import { TaxonomyNode, CompoundWidget, NodeIdentifier, QuerySegment } from '@/types';
import { DraggableConstructor } from 'gsap/Draggable';
import * as log from 'loglevel';

function getNodeById(rootNode: TaxonomyNode, wantedId: NodeIdentifier): TaxonomyNode {
    const result = rootNode.all(function(node: TaxonomyNode): boolean {
        return node.model.uri === wantedId;
    });
    if (result.length === 1) {
        return result[0];
    } else {
        throw new Error("not found: " + wantedId);
    }
}

function getVirtualRoot(rootNode: TaxonomyNode, wantedPath: NodeIdentifier[]): TaxonomyNode {
    log.debug("inside getVirtualRoot");
    if (wantedPath.length === 0) {
        log.debug("returning root node");
        return rootNode;
    }

    // Find the leaf of the path...
    const leaf = wantedPath[wantedPath.length - 1]
    return getNodeById(rootNode, leaf);
}

function findValidChildren(
    rootNode: TaxonomyNode, wantedPath: NodeIdentifier[]
): TaxonomyNode[] {
    const virtualRoot = getVirtualRoot(rootNode, wantedPath);
    return virtualRoot.children;
};


function getCollidingElements(d: DraggableConstructor, validElements: Element[]) {
    return validElements.filter(e => d.hitTest(e, '50%'));
}

function makeEmptyCompoundWidget(): CompoundWidget {
    return {
        taxonomyRef: null,
        isCurrentlyBeingDragged: false,
        selectedPath: [],
        hasTentativeTaxonSelector: false,
    };
}

function getQuerySegment(c: CompoundWidget): QuerySegment {
    if (c.taxonomyRef === null) throw new Error("null taxonomy");

    return {
        taxonomyRef: c.taxonomyRef,
        selectedPath: c.selectedPath.map(n => n.nodeId)
    };
}


export default {
    findValidChildren, getCollidingElements, makeEmptyCompoundWidget,
    getNodeById, getQuerySegment
};
