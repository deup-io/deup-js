import Block from '../block';
import { BlockType } from '../constants';
import { PageAttributes } from '../interfaces';

class Page extends Block {
  protected attributes: PageAttributes;

  /**
   * constructor.
   *
   * @param attr
   * @param children
   */
  constructor(attr: PageAttributes, children?: Block[]) {
    super();

    this.type = BlockType.PAGE;
    this.children = children;
    this.attributes = {
      title: attr.title,
      description: attr.description,
      tags: attr.tags,
    };
  }

  /**
   * add.
   */
  add(block: Block): void {
    if (!this.children) this.children = [];
    this.children.push(block);
  }
}

export default Page;
