import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const STORAGE_KEY = 'LoginService';

interface LoginUser {
  id: number;
  name: string;
}

@Injectable()
export class LoginService {

  private loginUserSubject$: BehaviorSubject<LoginUser | null>;

  constructor(
  ) {
    // ストレージの情報をもとにログイン状態を初期化
    const data = localStorage.getItem(STORAGE_KEY);
    if (data !== null) {
      const loginUserData: LoginUser = JSON.parse(data);
      this.loginUserSubject$ = new BehaviorSubject(loginUserData);
    } else {
      this.loginUserSubject$ = new BehaviorSubject(null);
    }
  }

  get loginUser$(): Observable<LoginUser | null> {
    return this.loginUserSubject$.asObservable();
  }

  isSignedIn(): boolean {
    return this.loginUserSubject$.getValue() !== null;
  }

  signIn(id: number, name: string) {
    if (this.isSignedIn()) { return; }

    const loginUserData: LoginUser = {
      id: id,
      name: name,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(loginUserData));

    this.loginUserSubject$.next(loginUserData);
  }

  signOut() {
    if (!this.isSignedIn()) { return; }

    localStorage.removeItem(STORAGE_KEY);

    this.loginUserSubject$.next(null);
  }
}
