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

 

    
};

export default styles;
