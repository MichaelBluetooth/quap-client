import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
} from "@angular/core";
import { Subject } from "rxjs";
import { ConfirmComponent } from "src/app/questions/confirm/confirm.component";

@Injectable({
  providedIn: "root",
})
export class ConfirmService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  createAlert() {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(ConfirmComponent)
      .create(this.injector);

    const didConfirm: Subject<boolean> = new Subject<boolean>();
    componentRef.instance.confirm.subscribe(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
      didConfirm.next(true);
    });
    componentRef.instance.cancel.subscribe(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
      didConfirm.next(true);
    });

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    return didConfirm;
  }
}
