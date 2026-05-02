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


スマホ最適化版の変更点:
- viewport-fit=cover 対応
- スマホ用ハンバーガーメニュー追加
- スマホ下部固定CTA追加
- ファーストビューの高さと文字量をスマホ向けに調整
- タップ領域を44px以上に調整
- 横スクロール防止
- 360px前後の小さい画面でも破綻しにくいCSSを追加
- セクション見出しをスマホでは左寄せにして読みやすく調整


フォント・見出し調整:
- ヒーロー見出しを fluid typography で再調整
- PC / スマホで見出しサイズを見直し
- ヒーロー見出しを2行固定に近い見え方へ調整
- 「を、」だけが孤立しにくいように見出しを行単位で分割
- 本文リード文の横幅と行間を調整
