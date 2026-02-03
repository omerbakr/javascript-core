//* Or Operator (||)
// It checks whether any one of the operands is a turthy value
// Same as the and operator it's starts from left to right

let userName;

console.log(userName || "Guest"); // Guest
// userName → falsy → continue
// "Guest"  → truthy and last operand → returned

console.log("truthy" || 0 || true || 1); // truthy
// "truthy" → truthy → evaluation stops immediately
// The first truthy value is returned.

console.log(null || 0 || undefined || NaN); // NaN
// null      → falsy → continue
// 0         → falsy → continue
// undefined → falsy → continue
// NaN       → falsy and last operand → returned
