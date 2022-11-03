import { FSComponent } from 'msfssdk';
import { MyComponent } from './MyComponent';

class MyInstrument extends BaseInstrument {
    get templateID(): string {
      return 'MyInstrument';
    }
    public connectedCallback(): void {
        super.connectedCallback();
      
        const text = Subject.create<string>('Hello MSFS!');
        FSComponent.render(<MyComponent text={text} />, document.getElementById('InstrumentContent'));
      
        text.set('Hello, subscribers!');
      }
  }
  
  registerInstrument('my-instrument', MyInstrument);