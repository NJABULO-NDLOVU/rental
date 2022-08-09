export interface CsvMapping {

    systemName: string;

    displayName: string;

    type: string;

    schemaProperties: SchemaProperties

}

export interface SchemaProperties {

    isRequired: boolean;

    propertyDataType: string;

    targetAttribute: string;

    sourceAttribute: string;

    exampleAttribute?: string;

}

export interface SourceAttributeOptions {

    data: SourceAttribute[];

}

export interface SourceAttribute {

    sampleValue: string;

    sourceAttribute: string;

}
