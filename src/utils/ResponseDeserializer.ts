import { Nullable } from './Nullable';

export default class DefaultResponseDeserializer {
  public async deserialize<R>(response: Response): Promise<Nullable<R>> {
    const text = await response.text();

    if (text.length > 0) {
      const json = JSON.parse(text);
      return json.result as R;
    }

    return null;
  }
}
