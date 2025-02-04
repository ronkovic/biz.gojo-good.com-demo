# GOJO Demo Project

## プロジェクト概要

このプロジェクトは、Next.js 15.1.6を使用したモダンなWebアプリケーションです。最新のReact（v19）とTypeScriptを採用し、UIフレームワークとしてTailwind CSSを使用しています。

## 技術スタック

- **フレームワーク**: Next.js 15.1.6
- **言語**: TypeScript
- **UIライブラリ**: React 19.0.0
- **スタイリング**: Tailwind CSS
- **チャート**: Chart.js, Recharts
- **日付操作**: date-fns
- **UIコンポーネント**: Headless UI
- **アイコン**: Heroicons
- **その他**: QRコード生成（qrcode.react）

## 開発環境のセットアップ

### 必要条件

- Node.js (最新のLTS版を推奨)
- npm または yarn

### インストール手順

1. リポジトリのクローン:
```bash
git clone [リポジトリURL]
cd gojo-demo
```

2. 依存関係のインストール:
```bash
npm install
# または
yarn install
```

3. 開発サーバーの起動:
```bash
npm run dev
# または
yarn dev
```

アプリケーションは http://localhost:3000 で利用可能になります。

## プロジェクト構造

```
gojo-demo/
├── .next/               # Next.jsビルド出力
├── public/             # 静的ファイル
├── scripts/            # ビルドスクリプト
├── src/                # ソースコード
│   ├── app/           # Next.js 13+ App Router
│   ├── components/    # 共通コンポーネント
│   ├── styles/        # グローバルスタイル
│   └── types/         # TypeScript型定義
├── .gitignore         # Git除外設定
├── next.config.js     # Next.js設定
├── package.json       # プロジェクト設定
├── postcss.config.js  # PostCSS設定
├── tailwind.config.ts # Tailwind CSS設定
└── tsconfig.json      # TypeScript設定
```

## 開発ガイドライン

### Gitブランチ戦略

- `main`: 製品リリース用ブランチ
- `develop`: 開発用ブランチ
- `feature/*`: 新機能開発用ブランチ
- `release/*`: リリース準備用ブランチ
- `hotfix/*`: 緊急バグ修正用ブランチ

### コーディング規約

1. **TypeScript**:
   - 厳格な型チェックを有効化
   - インターフェースやタイプの積極的な使用
   - any型の使用を避ける

2. **コンポーネント**:
   - 関数コンポーネントとHooksの使用
   - Props型の明示的な定義
   - 適切なコンポーネントの分割と再利用

3. **スタイリング**:
   - Tailwind CSSクラスの使用
   - カスタムユーティリティの作成は`tailwind.config.ts`で管理
   - コンポーネント固有のスタイルは`clsx`/`tailwind-merge`で管理

### コミット規約

コミットメッセージは以下の形式に従ってください：

```
<絵文字> <タイプ>: <タイトル>

<本文>

<フッター>
```

絵文字とタイプの例：
- 🎉 feat: 新機能
- 🐛 fix: バグ修正
- 📝 docs: ドキュメント
- 💄 style: スタイル
- ♻️ refactor: リファクタリング
- 🚀 perf: パフォーマンス改善
- ✅ test: テスト
- 📦 chore: ビルド・依存関係

## 品質管理

### テスト

- コンポーネントテストの作成
- E2Eテストの実装（必要に応じて）
- テストカバレッジの維持

### コード品質

- ESLintによる静的解析
- Prettierによるコードフォーマット
- TypeScriptの厳格なチェック

## ビルドとデプロイ

### ビルド

```bash
npm run build
# または
yarn build
```

### デプロイ

- Vercelプラットフォームを推奨
- 本番環境の環境変数の適切な設定
- デプロイ前のビルドチェック

## コントリビューション

1. 適切なブランチを作成（`feature/*`など）
2. 変更を実装
3. テストを追加・更新
4. プルリクエストを作成
5. コードレビューを受ける
6. マージ

## ライセンス

このプロジェクトはプライベートであり、すべての権利は保護されています。

## サポート

問題や質問がある場合は、以下を確認してください：
- イシュートラッカー
- プロジェクトのWiki
- チーム内のコミュニケーションチャンネル
