function add (arg1: string, arg2: string): string; // option1
function add (arg1: number, arg2: number): number; // option2
function add (arg1: string, arg2: number): number; // option3
function add (arg1: any, arg2: any): any{
    return arg1 + arg2
}


add("ahmer", "aleem")   // option1 overload
add("aleem", 20)    // option 3 overload
add(12, 20)         // option 2 overload
add (2, "kashif")   // no overload