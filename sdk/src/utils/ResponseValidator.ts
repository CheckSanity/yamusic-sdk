export default class DefaultResponseValidator {
  public async validateResponse(response: Response): Promise<void> {
    switch (response.status) {
      default:
        if (!response.status.toString().startsWith('20')) {
          const body = await response.text();
          throw new Error(
            `Unrecognised response code: ${response.status} - ${response.statusText}. Body: ${body}`,
          );
        }
    }
  }
}
