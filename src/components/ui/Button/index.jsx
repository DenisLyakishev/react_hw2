import classNames from "classnames";
import classes from "./styles.module.css";

export function Button({
    children,
    onClick,
    disabled
}) {
    return (
        <button
            className={classNames(classes.button, {[classes.disabled]:disabled,})}
            onClick={onClick}
          >
            {children}
        </button>
    );
}
