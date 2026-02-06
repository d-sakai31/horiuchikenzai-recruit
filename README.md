# 堀内建材 採用LP

有限会社堀内建材（長野県須坂市）の採用ランディングページ。
Next.js App Router + TypeScript + Tailwind CSS で構築。SSG（静的生成）対応。

## 技術スタック

- **Next.js 16** (App Router, `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4**
- **SSG** — Vercel / GitHub Pages / Cloudflare Pages 等にデプロイ可能

## ローカル起動

```bash
npm install
npm run dev
```

`http://localhost:3000` でプレビューできます。

## ビルド

```bash
npm run build
```

`out/` ディレクトリに静的ファイルが生成されます。

## Vercel デプロイ手順

1. GitHub にリポジトリを push
2. [Vercel](https://vercel.com) でリポジトリをインポート
3. フレームワークプリセット: **Next.js** を選択
4. デプロイ（設定変更なしでOK。`next.config.ts` の `output: "export"` で自動的に静的書き出しされます）

## ディレクトリ構成

```
src/
├── app/
│   ├── globals.css      # Tailwind設定・カスタムカラー
│   ├── layout.tsx        # 共通レイアウト・メタデータ・OGP
│   └── page.tsx          # LP本体（JSON-LD含む）
├── components/
│   ├── Header.tsx        # 固定ヘッダー（モバイルハンバーガー付き）
│   ├── Hero.tsx          # ファーストビュー
│   ├── Proof.tsx         # 数字実績カード
│   ├── Work.tsx          # 仕事内容・1日の流れ
│   ├── Culture.tsx       # チームの雰囲気
│   ├── Growth.tsx        # 成長フェーズ（今入る理由）
│   ├── RealEstate.tsx    # 不動産事業
│   ├── Tracks.tsx        # 中途/新卒 分岐セクション
│   ├── FAQ.tsx           # よくある質問（アコーディオン）
│   ├── ContactSection.tsx # 問い合わせフォーム・連絡先
│   └── Footer.tsx        # フッター
└── data/
    └── company.ts        # ★ 全テキスト・数値・リンクの一元管理
```

## コンテンツ差し替え方法

### テキスト・数値の変更

**`src/data/company.ts`** を編集するだけでLPの全テキストが更新されます。

- `COMPANY` — 社名、連絡先、SNSリンク
- `HERO` — キャッチコピー、サブコピー
- `PROOF_CARDS` — 数字実績
- `WORK` — 仕事内容、1日の流れ
- `CULTURE` — チーム紹介
- `GROWTH` — 成長フェーズの訴求
- `REAL_ESTATE` — 不動産事業
- `TRACKS` — 中途/新卒向けメッセージ
- `FAQ_ITEMS` — よくある質問
- `CTA` — 問い合わせ導線
- `FOOTER` — フッター情報
- `SEO` — title / description / OGP画像

### 画像の差し替え

`public/placeholder/` 内の画像ファイルを差し替えてください。

| ファイル | 用途 | 推奨サイズ |
|---------|------|-----------|
| `hero.svg` | ヒーロー背景 | 1920×1080 |
| `culture.svg` | チーム写真 | 800×600 |
| `building.svg` | 新社屋写真 | 800×600 |
| `work.svg` | 施工現場写真 | 800×600 |
| `og-image.svg` | OGP画像 | 1200×630 |

差し替え時は同名にするか、`company.ts` 内のパスを更新してください。

### フォーム送信先の差し替え（本番対応）

現在のフォームはダミー送信です。本番では以下のいずれかに差し替えてください。

#### Formspree を使う場合

1. [Formspree](https://formspree.io) でフォームを作成
2. `src/components/ContactSection.tsx` の `handleSubmit` を修正:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });
  setFormState("sent");
};
```

#### その他の方法

- **Google Forms** — iframe埋め込み or APIで送信
- **メールフォームサービス** — フォーム部分をサービスのコードに差し替え

### SNSリンクの差し替え

`company.ts` の `COMPANY.socialLinks` と `FOOTER.links` を更新してください。

### JSON-LD（JobPosting）の有効化

`src/app/page.tsx` 内にコメントアウトされた `JobPosting` スキーマの雛形があります。
募集要項（給与・雇用形態・勤務地等）が確定したら、コメントを外して正確な値を設定してください。

## メタデータ警告について

ビルド時の `metadataBase` 警告は、`layout.tsx` の `metadata` に以下を追加すると解消します:

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  // ... 既存の設定
};
```

本番ドメイン決定後に設定してください。

## ライセンス

Private — 有限会社堀内建材
