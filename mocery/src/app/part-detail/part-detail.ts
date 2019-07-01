import { Element } from '../models/element';
import { Part } from '../models/part';
import { OwnedColour } from '../models/owned-colour';

// extended Part model with list of connected elements and owned counts
// aggregated by colour
export class PartDetailData {
    public number: string;
    public name: string;
    elements: Element[];
    ownedColours: OwnedColour[];
}
