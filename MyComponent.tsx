import './MyComponent.css';
import { FSComponent, DisplayComponent, VNode, ComponentProps } from 'msfssdk';

interface MyComponentProps extends ComponentProps {
    text: Subscribable<string>;
  }

  export class MyComponent extends DisplayComponent<MyComponentProps> {
  public render(): VNode {
    return (
      <div class='my-component'>{this.props.text}</div>
    );
  }
}