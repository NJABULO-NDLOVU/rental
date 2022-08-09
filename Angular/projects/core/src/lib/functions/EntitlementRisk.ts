import EntitlementRiskItem from "../models/custom/EntitlementRiskItem";


export function CreateEntitlementRisk(circleLabel: string, circleColor: string, circleTotal: string | number, length: number) {

    let entitlement = new EntitlementRiskItem();

    // entitlement.label = label;
    
    entitlement.circleLabel = circleLabel;

    entitlement.circleColor = circleColor;

    entitlement.circleTotal = circleTotal;

    entitlement.length = length;

    return entitlement;

}