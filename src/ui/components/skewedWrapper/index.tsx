/*
*@/ui/components/skewedWrapper
* @description : component to skew the content of the page
* code : @aurelienLRY
*/

/*styles*/
import styles from './skewed.module.scss';


interface SkewedWrapperProps {
  direction: 'right' | 'left';
  bottom: boolean;
  top: boolean;
  children: React.ReactNode;
  backgroundColor?: string;
  skewedColor?: string;
}
/**
 * SkewedWrapper component.
 *
 * @component
 * @param {object} props - The component props.
 * @param {('right' | 'left')} props.direction - The direction of the skew.
 * @param {boolean} props.bottom - Whether to apply a bottom skew.
 * @param {boolean} props.top - Whether to apply a top skew.
 * @param {React.ReactNode} props.children - The content of the component.
 * @param {string} [props.backgroundColor='white'] - The background color of the component.
 * @param {string} [props.skewedColor='white'] - The color of the skew.
 * @returns {JSX.Element} The SkewedWrapper component.
 */
const SkewedWrapper: React.FC<SkewedWrapperProps> = ({ direction, children, bottom, top, backgroundColor = 'transparent', skewedColor = 'white' }) => {
  return (
    <div className={`${styles.skewed} ${styles[direction]} ${bottom ? styles.bottom : ''} ${top ? styles.top : ''}  `} style={{ backgroundColor, '--skewed-color': skewedColor } as React.CSSProperties}>
      <div className={styles['skewed-content']}>
        {children}
      </div>
    </div>
  );
};

export default SkewedWrapper;
