import { Injectable } from '@nestjs/common';
import { Experience } from 'src/domain/experience';

@Injectable()
export class ExperienceService {
  // TODO: Define in memory Repository
  findAll(): Promise<Experience[]> {
    return new Promise((resolve) => {
      const alt = 'green iguana';
      const url =
        'https://mui.com/static/images/cards/contemplative-reptile.jpg';
      const experience = {
        contentMedia: {
          alt,
          url,
        },
        title: 'Lizard',
        description:
          'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      };
      resolve([experience, experience, experience]);
    });
  }
}
