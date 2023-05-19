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

 

    
};

export default styles;
