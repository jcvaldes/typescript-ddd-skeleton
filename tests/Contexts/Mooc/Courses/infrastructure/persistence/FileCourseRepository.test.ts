import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';
import { CourseMother } from '../../domain/CourseMother';

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const course = CourseMother.random();
    const repository = new FileCourseRepository();
    await repository.save(course);
    // const course = await repository.search('id');
    // expect(course).toEqual(expectedCourse);
  });
});
