## keyID

一意性の確保
同一のコンポーネントがあるときに使う。

## ref 黒魔術


## 使えそうなコンポーネント群

react-router
router実装をしてくれてる。

reactable
高機能なテーブル

react-bootstrap
どうせ自分で作るだろうコンポーネントを用意してくれてる。

react-forms
バリデーションとか色々やってくれる。

## propにバリデーションをかける。

React.PropTypes


http://facebook.github.io/react/docs/reusable-components.html#prop-validation
ダメだとWarningが出る。本番環境だとチェックされない。
http://stackoverflow.com/questions/22118915/how-to-turn-on-off-reactjs-development-mode


> 注意点としては、ここで指定した制約については、パフォーマンス的な理由からProduction環境ではチェックされずに、Developでもエラーになるわけではなくてconsole.warnで出力されるのみです。

Production/developモードってのがあるのを知りませんでした。
公式ページを探してみると

> To use React in production mode, set the environment variable NODE_ENV to production.

http://facebook.github.io/react/downloads.html#npm

とあったのですが、



## this.stateの歴管理

http://prometheusresearch.github.io/react-forms/examples/undo.html

https://github.com/prometheusresearch/react-forms



## npm

npm install -g easymock gulp
