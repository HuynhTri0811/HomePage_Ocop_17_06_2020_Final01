declare var $: any;
import { Observable, from } from 'rxjs';
import { ResultInfo } from '../models/data.models';
import { Router } from '@angular/router';


export function encodeBase64(str: string) {

    try {
        if (typeof str == 'object') {
            throw 'error';
        }
        return window.btoa(unescape(encodeURIComponent(str)));
    } catch (e) {
        return '';
    }

}

//Decode
export function decodeBase64(str: string) {

    try {
        if (typeof str != 'string') {
            throw 'error';
        }
        return decodeURIComponent(escape(window.atob(str)));
    } catch (e) {
        return '';
    }

}


export function getUsers() {
    const data = localStorage.getItem('user');
 
    if (data) {
        const infoDecode = decodeBase64(data);

        const infos = JSON.parse(infoDecode);

        return infos;
    }

    return null;
}

export function getToken() {
    const user = getUsers();
    return 'Bearer ' + user.access_token;
}

export function showModel(id) {

    $('#' + id).modal('show');
}

export function hideModel(id) {
    $('#' + id).modal('hide');
}


export function callServiceHttp(serviceCall: Observable<Object>, callBack: Function) {
    serviceCall.subscribe((p: ResultInfo) => {
        console.log(p);
        if (p.result === 'success') {
            callBack(p);
        } 

    }, (error: any) => {
        console.log(error);
    });
}

export function change_alias(alias) {
    if (alias) {
        var str = alias;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        str = str.replace(/ + /g, " ");
        //str = str.trim();
    
        str = str.split(' ').join('-');
    
        return str;
    }

    return '';
  
}

export function checkPhone(phoneNumber) {
    let regexp = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    return regexp.test(phoneNumber);
}


export function checkEmail(email) {
    let regexp = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    console.log('Email ' + regexp.test(email));
    return regexp.test(email);
}


export function checkStrongPassword(password) {
    let regexp = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

    return regexp.test(password);
}