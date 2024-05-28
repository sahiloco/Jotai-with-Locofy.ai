import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DatesField.module.css";

export type DatesFieldType = {
  className?: string;
  label?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const DatesField: FunctionComponent<DatesFieldType> = ({
  className = "",
  label,
  propMinWidth,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.datesField, className].join(" ")}>
      <div className={styles.label} style={labelStyle}>
        {label}
      </div>
      <div className={styles.icon}>
        <img
          className={styles.calendartodayfilledIcon}
          alt=""
          src="/calendartodayfilled.svg"
        />
      </div>
    </div>
  );
};

export default DatesField;
