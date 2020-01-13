import { FilePipe } from './file.pipe';

describe('FilePipe', () => {
  it('create an instance', () => {
    const pipe = new FilePipe();
    expect(pipe).toBeTruthy();
  });

  it('convert numbers to mb', ()=>{
    const pipe = new FilePipe();
    const ret = pipe.transform(2120109)
    expect(ret).toBe('2.022MB');

  })
});
