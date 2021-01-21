import Router from "koa-router";
import * as callbackCtrl from "./callback.ctrl";

const callback = new Router();


callback.get("/spotify", callbackCtrl.spotify);

callback.get("/linkedin", callbackCtrl.linkedin);
callback.get("/discord", callbackCtrl.discord);
callback.get("/line", callbackCtrl.line);
callback.get("/twitter", callbackCtrl.twitter);
callback.get("/vkontakte", callbackCtrl.vkontakte);
callback.get("/dropbox", callbackCtrl.dropbox);
callback.get("/yahoo", callbackCtrl.yahoo);
callback.get("/slack", callbackCtrl.slack);
callback.get("/reddit", callbackCtrl.reddit);

callback.post("/github", callbackCtrl.github);


callback.post("/twitch", callbackCtrl.twitch);
callback.post("/microsoft", callbackCtrl.microsoft);
callback.post("/kakao", callbackCtrl.kakao);
callback.post("/google", callbackCtrl.google);
callback.post("/facebook", callbackCtrl.facebook);
callback.post("/amazon", callbackCtrl.amazon);
callback.post("/naver", callbackCtrl.naver);

export default callback;
