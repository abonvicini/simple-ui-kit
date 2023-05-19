import { style } from "typestyle";
import '../fonts.css';

const styles = {
    button: style({
        fontFamily: "Poppins",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        border: 0,
        fontStyle: "normal",
        fontWeight: 400,
        
        $nest: {
            "&:hover": {
                cursor: "pointer",
            },
            "&:disabled": {
                cursor: "default",
            },
        },
    }),

    rounded: style({
        borderRadius: "50px",
    }),

    small: style({
        fontSize: "12px",
        padding: "8px 16px",
        lineHeight: "16px",
    }),
    medium: style({
        fontSize: "16px",
        padding: "8px 24px",
        lineHeight: "24px",
    }),
    large: style({
        fontSize: "20px",
        padding: "16px 28px",
        lineHeight: "24px",
    }),
};

export default styles;
