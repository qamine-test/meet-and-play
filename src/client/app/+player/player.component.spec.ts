import { Component, provide } from '@angular/core';
import { TestComponentBuilder } from '@angular/compiler/testing';
import {
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  HTTP_PROVIDERS
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

import { PlayerComponent } from './player.component';

export function main() {
  describe('Player component', () => {
    it('should work',
      inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.createAsync(TestComponent)
          .then((rootTC: any) => {
            rootTC.detectChanges();

            let componentInstance = rootTC.debugElement.children[0].componentInstance;
            let componentDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(getDOM().querySelectorAll(componentDOMEl, 'div').length).toEqual(1);
            expect(getDOM().querySelectorAll(componentDOMEl, 'div')[0].textContent).toEqual('Player component');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-player></sd-player>',
  directives: [PlayerComponent]
})
class TestComponent {}
