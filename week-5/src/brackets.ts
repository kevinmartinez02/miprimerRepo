export function balancedBrackets(str:string) {
    const stack: string[] = []; // Initialize an empty stack

    const openingBrackets = '({[';
    const closingBrackets = ')}]';
    const bracketPairs = {
       // '(': '',
        '{': '}',
        '[': ']'
    } as any;

    for (const char of str){

        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpening = stack.pop() ;
            if (!lastOpening || bracketPairs[lastOpening] !== char) {
                return false; 
            }
        }
    }
    return stack.length === 0; 
}