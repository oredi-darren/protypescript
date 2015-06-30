var name: string = "Avenue Road";

// Errors: Cannot convert 'string' to 'number'
var bedrooms: number = <number> name;

// Type assertion works
var assertedMansion: number = <any>name;