/**
 * @jest-environment node
 */

import { GET } from './route';

describe('/health', () => {
  test('should return a status code of 200.', async () => {
    const response = await GET();

    expect(response.status).toEqual(200);
  });
});
