import Component from "../Component";

export default class BackgroundColorComponent extends Component {
  public color: number | string;
  constructor(name: string, color: number | string) {
    super(name);
    this.color = color;
  }
}
