import { Board } from './Board.js';
import { List } from './List.js';
import { Card } from './Card.js';

// Un Tablero tiene muchas Listas
Board.hasMany(List, { foreignKey: 'boardId', onDelete: 'CASCADE' });
List.belongsTo(Board, { foreignKey: 'boardId' });

// Una Lista tiene muchas Tarjetas
List.hasMany(Card, { foreignKey: 'listId', onDelete: 'CASCADE' });
Card.belongsTo(List, { foreignKey: 'listId' });

export { Board, List, Card };