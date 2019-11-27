const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Mateus Mangueira',
          email: 'mateus.mangueira14@gmail.com',
          password_hash: bcrypt.hashSync('1233215601', 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'João Mangueira',
          email: 'joao.mangueira@gmail.com',
          provider: false,
          password_hash: bcrypt.hashSync('1233215601', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Espaço Embelezart',
          email: 'embelezart@gmail.com',
          password_hash: bcrypt.hashSync('1233215601', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bruce Barber',
          email: 'brucebarber@gmail.com',
          password_hash: bcrypt.hashSync('1233215601', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => { },
};