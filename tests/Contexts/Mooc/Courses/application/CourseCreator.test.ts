import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
// import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';
import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

describe('CourseCreator', () => {
  let repository: CourseRepositoryMock;
  beforeEach(() => {
    repository = new CourseRepositoryMock();
  });
  it('should create a valid course', async () => {
    // const repository: CourseRepository = {
    //   save: jest.fn()
    // };
    // const repository = new CourseRepositoryMock();
    const creator = new CourseCreator(repository);
    const id = 'id';
    const name = 'name';
    const duration = '5 hours';
    const expectedCourse = new Course({ id, name, duration });
    await creator.run(id, name, duration);
    // expect(repository.save).toHaveBeenCalledWith(expectedCourse);
    // expect(repository.saveMock).toHaveBeenCalledWith(expectedCourse);
    repository.assertSaveḦaveBeenCalledWith(expectedCourse);
  });
});
