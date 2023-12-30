describe('Reservation', () => {
  let jwt: string;

  beforeAll(async () => {
    const user = {
      email: 'test@email.com',
      password: 'StrogPaswr124!@',
    };
    await fetch('http://auth:3001', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await fetch('http://auth:3001/auth/login', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    jwt = await response.text();
  });

  test('Create & Get', async () => {
    const response = await fetch('http://reservations:3000/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate: '02-02-2023',
        endDate: '02-05-2023',
        placeId: '123',
        invoiceId: '',
        // ...
      }),
    });

    expect(response.ok).toBeTruthy();
    const reservations = await response.json();

    const getReservationResponse = await fetch(
      `http://reservations:3000/reservations/${reservations._id}`,
      {
        headers: {
          Authentication: jwt,
        },
      },
    );
    const gettedReservations = getReservationResponse.json();
    expect(reservations).toEqual(gettedReservations);
  });
});
