export interface MetadataLogger {
  addMetadata(metadata: { [Key: string]: string }): void;
}
