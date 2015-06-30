enum Size {
	S,
	M,
	L,
	XL
}

var size = Size.S;
++size;
console.log(Size[size]);	// M

size = Size.XL;
--size;
console.log(Size[size]);	// L

size = Size.XL;
++size;
console.log(Size[size]);	// undefined