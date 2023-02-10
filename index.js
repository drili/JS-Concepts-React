
// *** Conditional logic with if statements, the ternary operator, and logical operators
const buttonLabel = playback === "step" ? "play" : "stop";

// =

// let buttonLabel;
// if (playback === "stop") {
//     buttonLabel = "play";
// } else {
//     buttonLabel = "stop";
// }

// * Logical operators && or || are very handy for building React components.
const isLoggedIn = true;
const userComponent = isLoggedIn && getUserComponent();

// * multiple conditions
const otherUsers = isLoggedIn && users?.length > 0 && getOtherUsersComponents();

// * the ? in the second operand users?.length > 0. This is optional chaining, which is not uncommon in React projects.



// *** Object literals and inline functions
const foo = { bar: 3, hello: "world" };

// * 2nd function argument uses inline object literal
foo("bar", { hello: "world" });

// * instead of 
function foo(id) {
    return {
        name: "dummy",
        id: id,
        bar: function () {
            console.log("bar");
        }
    }
}

// * you can do
function foo(id) {
    return {
        name: "dummy",
        id, // shorthand property name
        bar() { // shorthand method name
            console.log("bar");
        }
    }
}



// *** Template literals
const name = "bob";
console.log(`Hello, my name is ${name}`);



// *** Switch statement
export default (state, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkMode: action.darkMode,
            }
        case "UPDATE_PLAYBACK": {
            return {
                ...state,
                currentSound: action.currentSound
            }
        }
    
        default:
            return state;
    }
}

// * The example above checks the value of action.type and executes the code of a case statement. If it evaluates to a string, TOGGLE_DARK_MODE, then the code of the first case statement is executed.

