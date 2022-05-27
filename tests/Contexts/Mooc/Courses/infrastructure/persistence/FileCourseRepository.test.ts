import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const id = 'id';
    const name = 'name';
    const duration = 'duration';

    const expectedCourse = new Course({ id, name, duration });

    const repository = new FileCourseRepository();

    await repository.save(expectedCourse);

    const course = await repository.search('id');
    expect(course).toEqual(expectedCourse);
  });
});
