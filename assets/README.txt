DIYstation Apps Professional Site

構成:
- index.html          アプリ一覧ページ
- quickpost.html      QUICKポスト個別LP
- quickstack.html     QUICKSTACK個別LP
- assets/site.css     共通デザインCSS
- assets/site.js      ヘッダー影の軽いJS

画像について:
この版はCSSモックアップで画面を表現しているため、画像ファイルがなくても表示できます。
実際のアプリ画面を使う場合は、各HTML内の .app-screen 内部を <img src="./assets/quickpost.png"> などに差し替えてください。

差し替え推奨:
- href="#" の「利用開始ページへ」
- meta property="og:url" の https://example.com/
- OG画像を使う場合は assets/og.png / quickpost-og.png / quickstack-og.png を追加してください。
