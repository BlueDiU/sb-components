import './mylabel.css';

export interface IMyLabelProps {
  /**
   * What size to use
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * This is the text to show
   */
  label: string;
  /**
   * What color to use
   */
  fontColor?: string;
  /**
   * Choose the color
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Capitalize the text
   */
  allCaps?: boolean;
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor,
}: IMyLabelProps) => {
  const setColor = `text-${color}`;

  return (
    <span
      className={['label', `${size}`, setColor].join(' ')}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label.toLowerCase()}
    </span>
  );
};
