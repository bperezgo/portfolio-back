import { ComponentStackVO } from './componentStack';
import { MessageVO } from './message';
import { NameVO } from './name';
import { StackVO } from './stack';

export class TrackedError {
  private nameVo: NameVO;
  private messageVo: MessageVO;
  private stackVo: StackVO;
  private componentStackVo: ComponentStackVO;
  constructor(
    name: string,
    message: string,
    stack: string,
    componentStack: string,
  ) {
    this.nameVo = new NameVO(name);
    this.messageVo = new MessageVO(message);
    this.stackVo = new StackVO(stack);
    this.componentStackVo = new ComponentStackVO(componentStack);
  }
}
