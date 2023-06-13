import { style } from "typestyle";

const styles = {
    secondary: style({
        border: '1.4px solid #2871E6',
        color: "#2871E6",
        background: "white",
        $nest: {
            "&:hover": {
                background: "#EDF4FF",
            },
            "&:active": {
                background: "#C7DDFF",
            },
        },
    }),

    activeSecondary: style({
        background: "#EDF4FF",
    }),

    disabled: style({
        background: "#E0E2E5",
        color: "#565E69",
        borderColor: "#565E69",
        $nest: {
            "&:hover": {
                // para apagar el hover de primary
                background: "#E0E2E5",
            },
            "&:active": {
                background: "",
            },
        },
    })
 

    
};

export default styles;
