import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
class CustomTextField extends StatelessWidget {
  final TextEditingController controller;
  final String hintText;
  const CustomTextField({Key? key,
    required this.controller,
    required this.hintText,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      decoration:  InputDecoration(
        hintText: hintText,
        border: OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.black54
          ),
        ),
        enabledBorder: OutlineInputBorder(
        borderSide: BorderSide(
    color: Colors.black54
    )
      )
      ),
      validator:(val) {

      },
    );
  }
  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(StringProperty('hintText', hintText));
  }
}
