declare module 'kuromoji' {
  type Token = { surface_form: string; reading?: string; word_type: string };
  type Tokenizer = { tokenize(text: string): Token[] };
  const kuromoji: {
    builder(options: { dicPath: string }): {
      build(cb: (error: Error | null, tokenizer: Tokenizer) => void): void;
    };
  };
  export default kuromoji;
}
