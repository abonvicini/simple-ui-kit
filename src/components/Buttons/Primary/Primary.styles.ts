import { style } from "typestyle";

const styles = {
    primary: style({
        color: "white",
        background: "#2871e6",
        $nest: {
            "&:hover": {
                background: "#1759C4",
            },
            "&:active": {
                background: "#0944A2",
            },
        },
    }),

    activePrimary: style({
        background: "#1759C4",
    }),

    disabled: style({
        background: "#E0E2E5",
        color: "#565E69",
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
