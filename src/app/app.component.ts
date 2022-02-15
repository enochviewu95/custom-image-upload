import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imageSrcOne: string | undefined;
  imageSrcTwo: string | undefined;
  imageSrcThree: string | undefined;
  imageSrcFour: string | undefined;

  isFormOneSet: boolean = false;

  myFormOne = new FormGroup({
    fileOne: new FormControl('',[Validators.required]),
    fileSourceOne: new FormControl('',[Validators.required])
  });

  myFormTwo = new FormGroup({
    fileTwo: new FormControl('',[Validators.required]),
    fileSourceTwo: new FormControl('',[Validators.required])
  });

  myFormThree = new FormGroup({
    fileThree: new FormControl('',[Validators.required]),
    fileSourceThree: new FormControl('',[Validators.required])
  });

  myFormFour = new FormGroup({
    fileFour: new FormControl('',[Validators.required]),
    fileSourceFour: new FormControl('',[Validators.required])
  });


  constructor(private http:HttpClient) {}

  title = 'imageupload';

  get a(){
    return this.myFormOne.controls;
  }

  
  get b(){
    return this.myFormTwo.controls;
  }

  
  get c(){
    return this.myFormThree.controls;
  }

  
  get d(){
    return this.myFormFour.controls;
  }

  onFileChangeOne(event: any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () =>{
        this.imageSrcOne = reader.result as string;
        this.myFormOne.patchValue({
          fileSourceOne: reader.result
        });
      };
    }
  }


  onFileChangeTwo(event: any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () =>{
        this.imageSrcTwo = reader.result as string;
        this.myFormTwo.patchValue({
          fileSourceTwo: reader.result
        });
      };
    }
  }

  onFileChangeThree(event: any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () =>{
        this.imageSrcThree = reader.result as string;
        this.myFormThree.patchValue({
          fileSourceThree: reader.result
        });
      };
    }
  }
  
  onFileChangeFour(event: any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () =>{
        this.imageSrcFour = reader.result as string;
        this.myFormFour.patchValue({
          fileSourceFour: reader.result
        });
      };
    }
  }
  submit(){
    console.log(this.myFormOne.value);
    console.log(this.myFormTwo.value);
    console.log(this.myFormThree.value);
    console.log(this.myFormFour.value);
  }
}
