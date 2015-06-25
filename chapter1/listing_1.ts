var radius = 4;
var area = Math.PI * radius * radius;

// Invalid typescript
var radius2 = 4;
with(Math) {
	var area2 = PI * radius2 * radius2;
}