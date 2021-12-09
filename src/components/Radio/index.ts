import { Group } from './Group';
import { InternalRadio, RadioProps } from './Radio';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<RadioProps> {
    Group: typeof Group;
}

const Radio = InternalRadio as CompoundedComponent;
Radio.Group = Group;

export { Group };
export default Radio;
