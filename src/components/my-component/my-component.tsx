import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    const name = <b>{this.getText()}</b>;

    return <div>
      <div>Hello, World! I'm {name}</div>
      <div>I repeat, I'm {name}</div>
      <div>One last time, I'm {name}</div>
    </div>;
  }
}
